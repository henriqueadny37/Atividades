export default function Titu(info) {

    return info.pequeno ? (
        <>
        <p>{info.primeiro}</p>
        <p>{info.secundario}</p>
        </>

    ) : (
        <>
        <h1>{info.primeiro}</h1>
        <h2>{info.secundario}</h2>
        </>
    ) 
}