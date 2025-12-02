import React from 'react'
import { Link } from 'gatsby'

import { ColorDropdown } from './ColorDropdown'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'

import developer from '../assets/developer.png'
import blog from '../assets/blog.png'
import newsletter from '../assets/newsletter.png'
import rss from '../assets/rss.png'

export const Sidebar = ({
  theme,
  handleUpdateTheme,
  currentColor,
  setCurrentColor,
}) => {
  const links = [
    { url: '/blog', label: 'Blog', image: blog },
    { url: '/me', label: 'About Me', image: '' },
  ]

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <span>
              <img
                src={developer}
                className="navbar-logo"
                alt="andbalashov"
                title=""
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">andbalashov</span>
          </Link>
          <div className="flex-align-center">
            <ColorDropdown
              currentColor={currentColor}
              setCurrentColor={setCurrentColor}
            />
            <button
              className="navbar-button"
              onClick={() => {
                const newTheme = theme === 'dark' ? 'light' : 'dark'

                handleUpdateTheme(newTheme)
              }}
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
          </div>
        </div>
      </section>

      <section className="sidebar-section">
        <h2>About Me</h2>
        <div className="sidebar-content">
          <p>
            I'm <Link to="/me">Andrii</Link>, software engineer and open-source
            creator.
          </p>
        </div>
      </section>

      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {links.map((link) => (
            <Link key={link.url} to={link.url} activeClassName="active">
              <img src={link.image} alt={link.label} />
              {link.label}
            </Link>
          ))}
        </nav>
      </section>

      <section className="sidebar-section">
        <h2>Stay Connected</h2>
        <p className="sidebar-links">
          <a
            href="https://andbalashov.substack.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={newsletter} alt="Email Newsletter" height="16" width="16" />
            Email Newsletter
          </a>
          <a href="/rss.xml">
            <img src={rss} alt="RSS" height="16" width="16" />
            RSS Feed
          </a>
        </p>
      </section>
    </aside>
  )
}
