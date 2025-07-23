// const express = require("express");
const user = require("../models/user")

//  Signup
const signup = async (req, res)=>{
    try {
        const { name, email, password } = req.body;
        if (!name || !email || !password)
            return res.status(400).json({ message: "All fields required" });

        // email duplicate check
        const exist = await user.findOne({ email });
        if (exist) return res.status(400).json({ message: "Email already exists" });

        await user.create({ name, email, password });
        res.status(201).json({ message: "Signup successful" });
    } catch (err) {
        res.status(500).json({ message: "Signup failed", error: err.message });
    }
}


//  Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await user.findOne({ email, password });
        if (!user)
            return res.status(401).json({ message: "Invalid email or password" });

        res.json({ message: "Login successful" });
    } catch (err) {
        res.status(500).json({ message: "Login failed", error: err.message });
    }
}

module.exports = {signup, login};
