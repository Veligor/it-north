import React from "react";
import { Virtuoso } from 'react-virtuoso';
import { useState } from "react";
import { useCallback } from "react";
import { useEffect } from "react";
// https://github.com/petyosi/react-virtuoso/issues/440
export default function News() {
   
 
  const [users, setUsers] = useState(() => [])

  const loadMore = useCallback(() => {
    return setTimeout(() => {
      setUsers((users) => [...users, ...generateUsers(100, users.length)])
    }, 500)
  }, [setUsers])

  useEffect(() => {
    const timeout = loadMore()
    return () => clearTimeout(timeout)
  }, [])

  return (
    <Virtuoso
      style={{ height: 300 }}
      data={users}
      //endReached={loadMore}
      increaseViewportBy={200}
      itemContent={(index, user) => {
        return <div>{user.name}</div>
      }}
      components={{ Footer }}
    />
  )


}
const Footer = () => {
  return (
    <div
      style={{
        padding: '2rem',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      Loading...
    </div>
  )
}

function generateUsers(count, start) {
  return Array.from({ length: count }, (_, i) => ({
    name: `User ${start + i}`,
  }))
}
