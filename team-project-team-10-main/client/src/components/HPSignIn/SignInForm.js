"use client"

import { useState } from "react"
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    healthCard: "",
    password: "",
    rememberMe: false,
  })

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API call
    setTimeout(() => {
      setLoading(false)
      console.log("Form submitted:", formData)
    }, 1000)
  }

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  return (
    <div className="login-form-container">
      <div className="form-header">
        <h1>Welcome Back</h1>
        <p>Enter your Medical Identification Number for Canada (MINC) and password to access your account</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="MINC" className="form-label">
          Medical Identification Number for Canada (MINC)
          </label>
          <input
            type="text"
            id="MINC"
            name="MINC"
            className="form-input"
            placeholder="Enter your MINC number..."
            value={formData.MINC}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="remember-me">
          <input
            type="checkbox"
            id="rememberMe"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <button type="submit" className="submit-button" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
      </form>

      <div className="create-account">
        <p>Dont have an account?</p>
        <a 
          href="#" 
          onClick={(e) => {
            e.preventDefault()
            navigate('/h-signup')
          }}
          className="text-link"
        >
          Create an account
        </a>
      </div>
    </div>
  )
}

export default LoginForm
