import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom';

export function Github() {
  const data = useLoaderData()

  /*
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('https://api.github.com/users/hiteshchoudhary')
      .then((res) => res.json())
      .then((data) => setData(data))
  }, [])
  */

  return (
    <div className="text-center font-bold text-2xl m-20 ">
      GitHub followers: {data.followers}

      <img src={data.avatar_url} alt="github-profile" width={300} />
    </div>
  )
}

export const githubInfoLoader = async () => {
  const response = await fetch('https://api.github.com/users/hiteshchoudhary');
  return response.json();
}