import React from 'react';
import Link from 'next/link';
import styles from '@/styles/Footer.module.css';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <p>Copyright &copy; DJ Events {year}</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  );
}
