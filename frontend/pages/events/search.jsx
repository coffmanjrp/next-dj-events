import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import qs from 'qs';
import Layout from '@/components/Layout';
import EventItem from '@/components/EventItem';
import { API_URL } from '@/config/index';

export default function SearchPage({ events }) {
  const router = useRouter();

  return (
    <Layout title="Search Results">
      <Link href="/events">&#060; Go Back</Link>
      <h1>Search Results for &#034;{router.query.term}&#034;</h1>
      {events.length === 0 && <h3>No Events To Show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { performers_contains: term },
        { description_contains: term },
        { venue_contains: term },
      ],
    },
  });

  const res = await fetch(`${API_URL}/events?${query}`);
  const events = await res.json();

  return {
    props: {
      events,
    },
  };
}
