import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import axios from "axios";
import {API_URL} from "../config";

export default function Home({data}) {
  console.log(data)
  return (
    <div className={styles.container}>
      {data.map(item => (
          <p key={item}>{item.title}</p>
      ))}
    </div>
  )
}
export const getStaticProps =async () => {
  const {data} = await axios.get(`${API_URL}/products`)
  return {
    props: {data}
  }
}
