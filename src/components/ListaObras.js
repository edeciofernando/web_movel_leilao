import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "../conectadb";
import ItemLista from "./ItemLista";

const ListaObras = () => {

  const [obras, setObras] = useState([])

  // Get a list of cities from your database
  const getObras = async () => {
    const obrasCol = collection(db, "obras");
    const obraSnapshot = await getDocs(obrasCol);
    const obraList = obraSnapshot.docs.map((doc) => {
       const dados = doc.data();
       const id = doc.id;
       return {id, ...dados};
    });
//    console.log(obraList);
    setObras(obraList);
  };

  useEffect(() => {
    getObras();
  }, []);

  return (
    <div className="container mt-2">
      <div className="card-columns">
        {obras.map(obra => (
          <ItemLista 
            id={obra.id}          
            titulo={obra.titulo}          
            autor={obra.autor}          
            minimo={obra.minimo}          
            foto={obra.foto} />         
        ))}
      </div>
    </div>
  );
};

export default ListaObras;
