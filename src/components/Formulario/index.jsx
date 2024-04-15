import { useEffect, useState } from "react";
import styles from './Formulario.module.css';

const Formulario = ({ parentCallback, estiloAtualizado }) => {
    const [altura, setAltura] = useState(0);
    const [peso, setPeso] = useState(0);
    const [estilo, setEstilo] = useState(styles.default);

    useEffect(() => {
        setEstilo(estiloAtualizado);
        if(peso > 0 && altura > 0) {
            parentCallback(((peso / altura) / altura).toFixed(1));
        }else {
            parentCallback(-1);
        }
    }, [altura, peso, estiloAtualizado]
    )


    return (
        <div className="container">
            <div className={[styles.campos, estilo].join(' ')}>
                <div className={styles.bloco_esquerda}>
                    <label className={styles.campos_label} htmlFor="inp_altura">Altura (cm)</label>
                    <input type="number" className={styles.campos_numeros} min={0} placeholder="Insira sua altura..." id="inp_altura" onBlur={(e) => setAltura((e.target.value)/100)} />
                </div>
                <div className={styles.bloco_direita}>
                    <label className={styles.campos_label} htmlFor="inp_peso">Peso (kg)</label>                
                <   input  type="number" className={styles.campos_numeros} min={0} placeholder="Insira seu peso..." id="inp_peso" onBlur={(e) => setPeso(e.target.value)} />
                </div>
            </div>
        </div>
    )
}

export default Formulario;