import React from 'react'
import styles from './Loader.module.css'
import Image from 'next/image'

export const Loader = () => {
  return (
    <section className={styles.loader_container}>
        <div>
        <Image
        onClick={() => router.push("/")}
        src="/images/logo-white.png"
        alt="logo-white"
        width={140}
        height={53}
        className={styles.image_}
      />
            <h2>Loading . . .</h2>
        </div>
    </section>
  )
}
