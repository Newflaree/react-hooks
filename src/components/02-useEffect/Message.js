import React, {useEffect} from "react";

export const Message = () => {
  useEffect(() => {
    // Cuerpo del effect
    console.log( 'Componente Montado' ); 

    return () => {
      // Limpieza del effect
      console.log( 'Componente Desmontado' );
    }
  }, []);

  return(
    <div>
      <h3>You are great!</h3>
    </div>
  )
}
