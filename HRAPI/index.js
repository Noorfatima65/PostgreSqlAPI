const express = require('express');
const cors = require('cors');
const pool = require('./db');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());

app.get('/',async(req,res)=>{
    try{
        res.json('WELCOME TO HRAPI')
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/region',async(req,res)=>{
    try{
        const result = await pool.query('select * from regions');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

app.get('/country',async(req,res)=>{
    try{
        const result = await pool.query('select * from Countries');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({Error:err.message})
    }
});

const PORT = process.env.PORT;
app.listen(PORT,()=>{
    console.log(`Connected Successfully...on PORT ${PORT}`)
});

app.get('/employee',async(req,res)=>{
    try {
        const result = await pool.query('select * from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/jobs',async(req,res)=>{
    try {
        const result = await pool.query('select * from jobs');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/department',async(req,res)=>{
    try {
        const result = await pool.query('select * from departments');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/location',async(req,res)=>{
    try {
        const result = await pool.query('select * from locations');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalemp',async(req,res)=>{
    try {
        const result = await pool.query('select count(employee_id) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalcrty',async(req,res)=>{
    try {
        const result = await pool.query('select count(country_id) from countries');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalloc',async(req,res)=>{
    try {
        const result = await pool.query('select count(location_id) from locations');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalreg',async(req,res)=>{
    try {
        const result = await pool.query('select count(region_id) from regions');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totaldpt',async(req,res)=>{
    try {
        const result = await pool.query('select count(department_id) from departments');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totaljobs',async(req,res)=>{
    try {
        const result = await pool.query('select count(job_id) from jobs');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/maxsal',async(req,res)=>{
    try {
        const result = await pool.query('select max(max_salary) from jobs');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/minsal',async(req,res)=>{
    try {
        const result = await pool.query('select min(min_salary) from jobs');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/max',async(req,res)=>{
    try {
        const result = await pool.query('select max(salary) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/min',async(req,res)=>{
    try {
        const result = await pool.query('select min(salary) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/avg',async(req,res)=>{
    try {
        const result = await pool.query('select avg(salary) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/maxcom',async(req,res)=>{
    try {
        const result = await pool.query('select max(commission_pct) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/mincom',async(req,res)=>{
    try {
        const result = await pool.query('select min(commission_pct) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/avgcom',async(req,res)=>{
    try {
        const result = await pool.query('select avg(commission_pct) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalmng',async(req,res)=>{
    try {
        const result = await pool.query('select count(manager_id) from departments');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalloc',async(req,res)=>{
    try {
        const result = await pool.query('select count(location_id) from departments');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});


app.get('/totalreg',async(req,res)=>{
    try {
        const result = await pool.query('select count(region_id) from countries');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalmngg',async(req,res)=>{
    try {
        const result = await pool.query('select count(manager_id) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totaldptt',async(req,res)=>{
    try {
        const result = await pool.query('select count(department_id) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/totalempp',async(req,res)=>{
    try {
        const result = await pool.query('select count(employee_id) from job_history');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/dpttotal',async(req,res)=>{
    try {
        const result = await pool.query('select count(department_id) from job_history');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/start',async(req,res)=>{
    try {
        const result = await pool.query('select max(start_date) from job_history');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/end',async(req,res)=>{
    try {
        const result = await pool.query('select min(end_date) from job_history');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/maxhire',async(req,res)=>{
    try {
        const result = await pool.query('select max(hire_date) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});

app.get('/minhire',async(req,res)=>{
    try {
        const result = await pool.query('select min(hire_date) from employees');
        res.json(result.rows);
    } catch (error) {
        res.status(500).json({Error:err.message});
    }
});