import { Router } from 'express'
import { pool } from '../config/database.js'

const router = Router()

router.get('/', async (req, res) => {

  try {

    const result = await pool.query(
      'SELECT * FROM products ORDER BY id DESC'
    )

    res.json(result.rows)

  } catch (error) {

    res.status(500).json({
      error: error.message
    })

  }

})

export default router