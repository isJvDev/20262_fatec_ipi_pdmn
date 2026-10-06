//arrow function
//site do bossini > javascrip > 01 para revisar arrow funnction
const App = () => {
  //barra superior
  return  <div  style={{margin: 'auto', width: 768, backgroundColor: '#777', padding: 12,
   borderRadius: 8}}>
    <label
    style={{display: 'block', marginBBottom: 8}}
     htmlFor="nome">
      Nome:

    </label>

  </div>
}

//para que o import do modulo main ocorro, devemos deixar essa função publica
export  default App