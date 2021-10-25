import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { doc, getDoc, addDoc, collection } from "firebase/firestore/lite";
import { db } from "../conectadb";

const Detalhes = () => {
  const { id } = useParams();

  const [obra, setObra] = useState({});

  const getObra = async (id) => {
    const docRef = doc(db, "obras", id);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      //console.log("Document data:", docSnap.data());
      setObra({ id: id, ...docSnap.data() });
    } else {
      // doc.data() will be undefined in this case
      console.log("Ocorreu um erro...");
    }
  };

  useEffect(() => {
    getObra(id);
  }, [id]);

  const gravaLance = async () => {
    try {

        console.log(id);

//      const docRef = doc(db, "obras", id);

//      const newDoc = await addDoc(docRef, "lance", {"teste": "ola"});

        const docRef = await addDoc(collection(db, "obras", id, "lance"), {"teste": "ola"});


//      setAviso("Ok! Lance cadastrado com sucesso");
alert("Ok")
    } catch (erro) {
//      setAviso("Erro: " + erro);
alert(erro);
    }
//    tempoAviso();

//    e.target.reset();
  };



  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6 mt-2">
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src={obra.foto}
              alt="Obra de Arte"
            />
            <div className="card-body">
              <h4 className="card-title">{obra.titulo}</h4>
              <h6 className="card-title">Autor: {obra.autor}</h6>
              <p className="card-text">{obra.descricao}</p>
              <p className="card-text">
                Lance Mínimo: {" "}
                {obra.minimo && obra.minimo.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6 mt-2">
          <button className="btn btn-danger btn-lg btn-block" onClick={gravaLance}>
            GOSTOU? DÊ UM LANCE!        
          </button>        



        </div>
      </div>
    </div>
  );
};

export default Detalhes;
