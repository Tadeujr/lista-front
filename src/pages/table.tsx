import { json } from "node:stream/consumers";
import { useState, useEffect } from 'react';
import Header from "../components/header";
import styles from "../styles/Table.module.css";
import apiService from "../../src/api";

export default function Table() {
  const [list2, setList2] = useState([]);

  useEffect(() => {
    apiService.get("/product/1").then((response) => {
      setList2(response.data);
    });
  }, []);
  console.log(list2)
//   const list2 =     [
//     {
//         "productName": "BATATA DOCE kg",
//         "category": "Hortifruti",
//         "brand": "N/A",
//         "unity": 2.855,
//         "commercialUnit": "KG",
//         "price": 11.39,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 1
//     },
//     {
//         "productName": "CEBOLA kg",
//         "category": "Hortifruti",
//         "brand": "N/A",
//         "unity": 1.535,
//         "commercialUnit": "KG",
//         "price": 9.96,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 2
//     },
//     {
//         "productName": "CEBOLINHA VERDE UND",
//         "category": "Hortifruti",
//         "brand": "N/A",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 4.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 3
//     },
//     {
//         "productName": "SALSA UND",
//         "category": "Hortifruti",
//         "brand": "N/A",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 4.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 4
//     },
//     {
//         "productName": "S.LIXO 50L/30 63X80 GREENLIXO PTO",
//         "category": "Limpeza",
//         "brand": "GREENLIXO",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 11.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 5
//     },
//     {
//         "productName": "DETERGENTE LIMPOL 500ML CRISTAL",
//         "category": "Limpeza",
//         "brand": "LIMPOL",
//         "unity": 5,
//         "commercialUnit": "UN",
//         "price": 13.45,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 6
//     },
//     {
//         "productName": "LIMPAD CREM CIF 450ML 20 DESC ORIGINAL",
//         "category": "Limpeza",
//         "brand": "CIF",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 9.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 7
//     },
//     {
//         "productName": "LIMPAD AJAX NATURAL ESSENTIALS 1L EUCALIP/CITRUS",
//         "category": "Limpeza",
//         "brand": "AJAX",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 8.59,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 8
//     },
//     {
//         "productName": "LIMPAD M-USO VEJA POW FUS SQZ 500ML LARANJA",
//         "category": "Limpeza",
//         "brand": "VEJA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 5.49,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 9
//     },
//     {
//         "productName": "AGUA SANITARIA QBOA 1L",
//         "category": "Limpeza",
//         "brand": "QBOA",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 7.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 10
//     },
//     {
//         "productName": "CREME DENT COLG T12 2X220G LMPM CLEAN MINT",
//         "category": "Limpeza",
//         "brand": "COLGATE",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 19.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 11
//     },
//     {
//         "productName": "APARELHO PRESTOBARBA3 MASC L4P3 SENSE CARE",
//         "category": "Limpeza",
//         "brand": "PRESTOBARBA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 26.9,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 12
//     },
//     {
//         "productName": "DESOD AERO REXONA CLINIC MEN 150ML CLEAR",
//         "category": "Limpeza",
//         "brand": "REXONA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 19.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 13
//     },
//     {
//         "productName": "GEL ADESIVO PATO REFIL 38G 6 DISCOS MARINE",
//         "category": "Limpeza",
//         "brand": "PATO",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 15.59,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 14
//     },
//     {
//         "productName": "ESPONJA M-USO BOMBRIL L4P3UND",
//         "category": "Limpeza",
//         "brand": "BOMBRIL",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 5.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 15
//     },
//     {
//         "productName": "PANO ROLO MULTI-USO CONDOR UND",
//         "category": "Limpeza",
//         "brand": "CONDOR",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 26.9,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 16
//     },
//     {
//         "productName": "SABONETE LIQ FIORUCCI REFIL 440ML FLOR DE CEREJ",
//         "category": "Limpeza",
//         "brand": "FIORUCC",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 10.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 17
//     },
//     {
//         "productName": "PAO DO FORNO WICKBOLD INTEGRAL 500G",
//         "category": "Padaria",
//         "brand": "WICKBOLD",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 12.89,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 18
//     },
//     {
//         "productName": "BISC CR CRACKER PIRAQUE 200G",
//         "category": "Padaria",
//         "brand": "PIRAQUE",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 4.69,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 19
//     },
//     {
//         "productName": "BISC AGUA GERG PIRAQUE 240G",
//         "category": "Padaria",
//         "brand": "PIRAQUE",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 4.49,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 20
//     },
//     {
//         "productName": "MASSA STA AMALIA ZERO GLUTEN 500G PENNE",
//         "category": "Cereais e Grãos",
//         "brand": "STA AMALIA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 7.79,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 21
//     },
//     {
//         "productName": "MILHO PIPOCA JUPARANA 500G",
//         "category": "Cereais e Grãos",
//         "brand": "JUPARANA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 5.19,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 22
//     },
//     {
//         "productName": "FEIJAO CARIOCA COMBRASIL 1kg",
//         "category": "Cereais e Grãos",
//         "brand": "COMBRASIL",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 11.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 23
//     },
//     {
//         "productName": "ACUCAR CRISTAL ALCON 2kg",
//         "category": "Cereais e Grãos",
//         "brand": "ALCON",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 7.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 24
//     },
//     {
//         "productName": "ARROZ SEPE BIANCO T1 5kg",
//         "category": "Cereais e Grãos",
//         "brand": "SEPE",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 19.7,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 25
//     },
//     {
//         "productName": "TAPIOCA GOMA ROCHA 500G",
//         "category": "Cereais e Grãos",
//         "brand": "ROCHA",
//         "unity": 3,
//         "commercialUnit": "UN",
//         "price": 17.97,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 26
//     },
//     {
//         "productName": "MASSA TORTILHA RAP 10 LIGHT 330G",
//         "category": "Cereais e Grãos",
//         "brand": "RAP 10",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 10.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 27
//     },
//     {
//         "productName": "FILTRO PAPEL 102 3 CORACOES 30UND",
//         "category": "Cereais e Grãos",
//         "brand": "3 CORACOES",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 5.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 28
//     },
//     {
//         "productName": "MILHO VERDE FUGINI SACHE 170G",
//         "category": "Cereais e Grãos",
//         "brand": "FUGINI",
//         "unity": 5,
//         "commercialUnit": "UN",
//         "price": 17.45,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 29
//     },
//     {
//         "productName": "QUEIJO RALADO RELIQ CANASTRA 50G",
//         "category": "Leite e Derivados",
//         "brand": "RELIQ CANASTRA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 8.79,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 30
//     },
//     {
//         "productName": "CREME LEITE BENDITO TP 200G",
//         "category": "Leite e Derivados",
//         "brand": "BENDITO",
//         "unity": 4,
//         "commercialUnit": "UN",
//         "price": 11.16,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 31
//     },
//     {
//         "productName": "COCO FLOCOS COCO CIA INTEGRAL 100G",
//         "category": "Cereais e Grãos",
//         "brand": "COCO CIA",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 10.78,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 32
//     },
//     {
//         "productName": "MILHO PIPOCA JUPARANA 500G",
//         "category": "Leite e Derivados",
//         "brand": "JUPARANA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 5.19,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 33
//     },
//     {
//         "productName": "CREME LEITE BENDITO TP 200G",
//         "category": "Leite e Derivados",
//         "brand": "BENDITO",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 2.79,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 34
//     },
//     {
//         "productName": "SABAO BARRA COCO URCA 180G",
//         "category": "Limpeza",
//         "brand": "URCA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 3.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 35
//     },
//     {
//         "productName": "LEITE LV PORTO ALEGRE DESNATADO 1L",
//         "category": "Leite e Derivados",
//         "brand": "ALEGRE",
//         "unity": 7,
//         "commercialUnit": "UN",
//         "price": 30.03,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 36
//     },
//     {
//         "productName": "FILE PEITO CONG UNIAVES BDJ 1kg",
//         "category": "Limpeza",
//         "brand": "UNIAVES",
//         "unity": 5,
//         "commercialUnit": "UN",
//         "price": 104.5,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 37
//     },
//     {
//         "productName": "LA ACO BOMBRIL 60G C/8",
//         "category": "Limpeza",
//         "brand": "BOMBRIL",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 3.19,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 38
//     },
//     {
//         "productName": "CHA DE DENTRO BOVINO kg",
//         "category": "Carnes",
//         "brand": "N/A",
//         "unity": 3.01,
//         "commercialUnit": "KG",
//         "price": 117.09,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 39
//     },
//     {
//         "productName": "MUSCULO BOVINO 1 kg",
//         "category": "Carnes",
//         "brand": "N/A",
//         "unity": 1.628,
//         "commercialUnit": "KG",
//         "price": 48.68,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 40
//     },
//     {
//         "productName": "ACEM BOVINO kg",
//         "category": "Carnes",
//         "brand": "N/A",
//         "unity": 1.156,
//         "commercialUnit": "KG",
//         "price": 28.78,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 41
//     },
//     {
//         "productName": "MAIONESE HELLMANNS LIGHT POTE 500G",
//         "category": "Molhos e Enlatados",
//         "brand": "ELLMANNS",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 11.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 42
//     },
//     {
//         "productName": "REQUEIJAO CR VENEZA LIGHT POTE 200G",
//         "category": "Leite e Derivados",
//         "brand": "VENEZA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 7.39,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 43
//     },
//     {
//         "productName": "QUEIJO RALADO RELIQ CANASTRA 50G",
//         "category": "Leite e Derivados",
//         "brand": "RELIQ",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 8.79,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 44
//     },
//     {
//         "productName": "OVOS BRANCOS PEQUENO 30UND",
//         "category": "Hortifruti",
//         "brand": "KerOvos",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 13.98,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 45
//     },
//     {
//         "productName": "AGUA C/GAS CRYSTAL 1,5L",
//         "category": "Bebidas",
//         "brand": "CRYSTAL",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 4.68,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 46
//     },
//     {
//         "productName": "FARINHA MAND TORR LESTE 500G",
//         "category": "Cereais e Grãos",
//         "brand": "LESTE",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 4.69,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 47
//     },
//     {
//         "productName": "REFRIG COCA COLA ZERO 600ML",
//         "category": "Bebidas",
//         "brand": "COCA COLA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 4.99,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 48
//     },
//     {
//         "productName": "QUEIJO MINAS PAD VENEZA kg",
//         "category": "Leite e Derivados",
//         "brand": "VENEZA",
//         "unity": 0.466,
//         "commercialUnit": "KG",
//         "price": 34.44,
//         "store": "Atacado Vem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 49
//     },
//     {
//         "productName": "ERVILHA CONG SADIA 1.05KG VEG TAL",
//         "category": "Cereais e Grãos",
//         "brand": "SADIA",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 24.59,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 50
//     },
//     {
//         "productName": "PERNIL SUINO SOS.TEMP.VACUO CORELLA KG",
//         "category": "Carnes",
//         "brand": "CORELLA",
//         "unity": 0.676,
//         "commercialUnit": "KG",
//         "price": 16.89,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 51
//     },
//     {
//         "productName": "PERNIL SUINO SOS.TEMP.VACUO CORELLA KG",
//         "category": "Carnes",
//         "brand": "CORELLA",
//         "unity": 0.65,
//         "commercialUnit": "KG",
//         "price": 16.24,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 52
//     },
//     {
//         "productName": "PERNIL SUINO SOS.TEMP.VACUO CORELLA KG",
//         "category": "Carnes",
//         "brand": "CORELLA",
//         "unity": 0.726,
//         "commercialUnit": "KG",
//         "price": 18.14,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 53
//     },
//     {
//         "productName": "AVEIA YOKI FLOCOS REG 500GR",
//         "category": "Cereais e Grãos",
//         "brand": "YOKI",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 23.98,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 54
//     },
//     {
//         "productName": "REFC.CLIGHT LARANJA 8G",
//         "category": "Bebidas",
//         "brand": "CLIGHT",
//         "unity": 4,
//         "commercialUnit": "UN",
//         "price": 5.96,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 55
//     },
//     {
//         "productName": "ATUM 88 RAL.OLEO 140G",
//         "category": "Molhos e Enlatados",
//         "brand": 88,
//         "unity": 5,
//         "commercialUnit": "UN",
//         "price": 26.95,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 56
//     },
//     {
//         "productName": "MOSTARDA QUERO FP 190GR",
//         "category": "Molhos e Enlatados",
//         "brand": "QUERO",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 5.89,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 57
//     },
//     {
//         "productName": "KETCHUP HEMMER ZERO 310G",
//         "category": "Molhos e Enlatados",
//         "brand": "HEMMER",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 7.69,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 58
//     },
//     {
//         "productName": "REFR.SPRITE 2LT SACUCAR",
//         "category": "Bebidas",
//         "brand": "SPRITE",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 12.98,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 59
//     },
//     {
//         "productName": "GELEIA HOMEMADE ZERO GOIABA 250G",
//         "category": "Padaria",
//         "brand": "HOMEMADE",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 25.79,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 60
//     },
//     {
//         "productName": "LAVA ROUPAS LIQ.OMO CONC.REF.500ML",
//         "category": "Limpeza",
//         "brand": "OMO",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 29.79,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 61
//     },
//     {
//         "productName": "AMAC.CONC.COMFORT DOYP P.CUIDADO 900ML",
//         "category": "Limpeza",
//         "brand": "COMFORT",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 18.59,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 62
//     },
//     {
//         "productName": "TOMATE KG",
//         "category": "Hortifruti",
//         "brand": "N/A",
//         "unity": 1.625,
//         "commercialUnit": "KG",
//         "price": 16.23,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 63
//     },
//     {
//         "productName": "SAB.LUX LIRIO AZUL 85G",
//         "category": "Limpeza",
//         "brand": "LUX",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 5.38,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 64
//     },
//     {
//         "productName": "SAB.LUX FLOR DE LOTUS 85G",
//         "category": "Limpeza",
//         "brand": "LUX",
//         "unity": 2,
//         "commercialUnit": "UN",
//         "price": 5.38,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 65
//     },
//     {
//         "productName": "SAB.LUX ORQUIDEA NEGRA 85G",
//         "category": "Limpeza",
//         "brand": "LUX",
//         "unity": 4,
//         "commercialUnit": "UN",
//         "price": 10.76,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 66
//     },
//     {
//         "productName": "ALECRIM UND",
//         "category": "Hortifruti",
//         "brand": "N/A",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 2.49,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 67
//     },
//     {
//         "productName": "FLOR DE VIOLETA VIOLP11070",
//         "category": "Hortifruti",
//         "brand": "N/A",
//         "unity": 1,
//         "commercialUnit": "UN",
//         "price": 3.99,
//         "store": "Supermercado Sempre Tem",
//         "buyDate": "25/01/2022",
//         "wasAcquired": true,
//         "list": 1,
//         "id": 68
//     }
// ]


 
  const lista = {
    Feijao: {
      info: {
        loja:"Carrefour",
        produto: "Feijão",
        marca: "juju",
        preco: "4.99",
        DataCompra: "27/05/2022",
        unidade: "1 kg",
        qtd: "20",
        comprado: false,
      },
    },

    Arroz: {
      info: {
        loja:"Carrefour",
        produto: "Arroz",
        marca: "Sepé",
        preco: "17.90",
        DataCompra: "27/05/2022",
        unidade: "1 kg",
        qtd: "2",
        comprado: true,
      },
    },
  };

  return (
    <>
      <Header page="Lista" />
      
      <div className={styles.option}>
        {/* <div className={styles.value}>R$ {199999}</div> */}
        <table  className={styles.tbZebra}>
          <thead>
            <tr>
              <th>Loja</th>
              <th>Categoria</th>
              <th>Produto</th>
              <th>Marca</th>
              <th>Unidade Comercial</th>
              <th>Preço</th>
              <th>Data de Compra</th>
              <th>Unidade</th>
              <th>Comprado</th>

            </tr>
          </thead>
          <tbody>
          {list2.map((product,index) => {
                  return (
                    <tr key={index}>
                    <td>{product.store}</td>
                    <td>{product.category}</td>
                    <td>{product.productName}</td>
                    <td>{product.brand}</td>
                    <td>{product.commercialUnit}</td>
                    <td>{product.price}</td>
                    <td>{product.buyDate}</td>
                    <td>{product.unity}</td>
                    <td><input className={styles.container} type="checkbox"  name="bought"/></td>
                    </tr>
              )
          })}
          </tbody>
        </table>
      </div>
    </>
  );
}
