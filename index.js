const express = require('express');
const { Pool } = require('pg');

const app = express();
app.use(express.json());

// إعداد اتصال قاعدة البيانات (عدل القيم حسب إعداداتك)
const pool = new Pool({
  user: 'اسم_المستخدم',
  host: 'رابط_الخادم_أو_localhost',
  database: 'اسم_قاعدة_البيانات',
  password: 'كلمة_السر',
  port: 5432, // عادة هذا هو المنفذ الافتراضي لـ PostgreSQL
});

// اختبار الاتصال بقاعدة البيانات
pool.connect((err, client, release) => {
  if (err) {
    return console.error('خطأ في الاتصال بقاعدة البيانات', err.stack);
  }
  console.log('تم الاتصال بقاعدة البيانات بنجاح');
  release();
});

// مثال: جلب كل المستخدمين
app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'خطأ في جلب البيانات' });
  }
});

// مثال: إضافة مستخدم جديد
app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *',
      [name, email]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'خطأ في إضافة المستخدم' });
  }
});

// تشغيل الخادم
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`الخادم يعمل على المنفذ ${PORT}`);
});
