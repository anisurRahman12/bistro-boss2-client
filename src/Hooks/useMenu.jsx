//import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";


const useMenu = () => {
  const axiosPublic = useAxiosPublic();
  // const [menu, setMenu]=useState([]);
  // const [loading, setLoading] = useState(true);
  // useEffect( ()=>{
  //     fetch('http://localhost:4000/menu')
  //     .then(res =>res.json())
  //     .then(Data=>{
  //         setMenu(Data)
  //         setLoading(False)
  //     })
  // }, [])

  const { data: menu = [], isPending: loading, refetch } = useQuery({
    querykey: ['menu'],
    queryFn: async () => {
      const res = await axiosPublic.get('/menu');
      return res.data;
    }
  })


  return [menu, loading, refetch]

}

export default useMenu;