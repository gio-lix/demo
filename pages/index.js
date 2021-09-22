
import styles from '../styles/Home.module.css'
import axios from "axios";
import {API_URL} from "../config";
import Image from "next/image";

export default function Home({data}) {
  console.log(data)
  return (
    <div className={styles.container}>
      {data.map(item => (
          <div key={item}>
            <p>{item.title}</p>
            <Image src={item.image.formats.small.url} width={100} height={60} />
          </div>

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
