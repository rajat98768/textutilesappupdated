import React from 'react'

export default function About() {
  return (
    <div><div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="lead text-center">
        Welcome to <strong>Textutiles</strong> – your one-stop solution for quick
        and smart text manipulation!
      </p>

      <div className="card shadow-lg border-0 mb-4">
        <div className="card-body">
          <h3 className="card-title">🚀 What We Offer</h3>
          <ul className="list-group list-group-flush mt-3">
            <li className="list-group-item">Convert Case – Instantly change text to UPPERCASE, lowercase, or Capitalized form.</li>
            <li className="list-group-item">Text Copy & Clear – Copy text to clipboard or reset your editor in one click.</li>
            <li className="list-group-item">Word & Character Counter – Track the length of your content in real time.</li>
            <li className="list-group-item">Remove Extra Spaces – Clean up messy text with just one tap.</li>
            <li className="list-group-item">Preview & Live Editing – See results instantly as you type.</li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6 mb-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title">💡 Why Textutiles?</h4>
              <p className="card-text">
                We built this platform to save you time and effort. Instead of
                manually editing and formatting, you can rely on our
                easy-to-use tools that run instantly in your browser. No
                downloads, no complexity – just simple, powerful text utilities.
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-3">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body">
              <h4 className="card-title">🌍 Our Vision</h4>
              <p className="card-text">
                To empower users with simple yet powerful tools that help in
                writing, editing, and presenting text more effectively. We
                believe that <strong>small utilities can make a big difference</strong> in
                productivity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
