import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import EventMap from '@/components/EventMap';
import { API_URL } from '@/config/index';
import styles from '@/styles/Event.module.css';

export default function EventPage({ evt }) {
  const date = new Date(evt.date).toLocaleDateString('en-US');

  return (
    <Layout>
      <div className={styles.event}>
        <span>
          {date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image.formats.large.url} width={960} height={600} />
          </div>
        )}
        <h3>Performers</h3>
        <p>{evt.performers}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
        <EventMap evt={evt} />
        <Link href="/events">
          <a className={styles.back}>&#060; Go Back</a>
        </Link>
      </div>
    </Layout>
  );
}

export async function getServerSideProps({ params: { slug } }) {
  const res = await fetch(`${API_URL}/events?slug=${slug}`);
  const events = await res.json();

  return {
    props: {
      evt: events[0],
    },
  };
}
