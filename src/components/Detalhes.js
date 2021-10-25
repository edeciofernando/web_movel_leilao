import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { doc, getDoc } from "firebase/firestore/lite";
import { db } from "../conectadb";

const Detalhes = () => {
  const {id} = useParams();

  const getObra = async (id) => {
    const docRef = doc(db, "obras", id);
    const docSnap = await getDoc(docRef);
    
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
    } else {
      // doc.data() will be undefined in this case
      console.log("Erro...");
    }    
  }

  useEffect(() => {
    getObra(id);
  }, [id])

  return (
    <h2>Detalhes da Obra: {id}</h2>
  )
}

export default Detalhes;