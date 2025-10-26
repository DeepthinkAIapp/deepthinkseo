import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="container footer-flex">
        <div className="footer-left">
          <p>&copy; 2025 Deepthink Technologies. All rights reserved.</p>
        </div>
        <div className="footer-center">
          <Link href="#services">Services</Link> | 
          <Link href="#results">Results</Link> | 
          <Link href="#process">Process</Link> | 
          <Link href="/contact">Contact</Link> | 
          <Link href="/blog">Blog</Link>
        </div>
      </div>
    </footer>
  )
}
