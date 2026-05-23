import { Router } from 'express'
import { pool } from '../config/database.js'

const router = Router()


// =========================
// LISTAR PEDIDOS
// =========================

router.get('/', async (req, res) => {

  try {

    // =========================
    // BUSCAR PEDIDOS
    // =========================

    const ordersResult = await pool.query(`
      SELECT *
      FROM orders
      ORDER BY created_at DESC
    `)

    const orders = ordersResult.rows

    // =========================
    // BUSCAR ITENS DE CADA PEDIDO
    // =========================

    for (const order of orders) {

      const itemsResult = await pool.query(
        `
        SELECT *
        FROM order_items
        WHERE order_id = $1
        `,
        [order.id]
      )

      order.items = itemsResult.rows

    }

    res.json(orders)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})

router.post('/', async (req, res) => {

  try {

    const {
      customer,
      address,
      payment,
      cart,
      total
    } = req.body

    const orderResult = await pool.query(
      `
      INSERT INTO orders (
        customer_name,
        customer_email,
        customer_phone,
        card_last_numbers,
        cep,
        address,
        address_number,
        address_complement,
        total
      )

      VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)

      RETURNING *
      `,
      [
        customer.name,
        customer.email,
        customer.phone,

        payment.cardNumber.slice(-4),

        address.cep,
        address.street,
        address.number,
        address.complement,

        total
      ]
    )

    const order = orderResult.rows[0]

    for (const item of cart) {

      await pool.query(
        `
        INSERT INTO order_items (
          order_id,
          product_name,
          product_size,
          product_price,
          quantity
        )

        VALUES ($1,$2,$3,$4,$5)
        `,
        [
          order.id,

          item.name,
          item.size,
          item.price,
          item.quantity
        ]
      )

    }

    res.status(201).json({
      success: true,
      order
    })

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})



export default router