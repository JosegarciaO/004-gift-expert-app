
import { useFetchGift } from "../hooks/useFetchGift";
import { GiftItem } from "./GiftItem";


export const GiftGrid = ({Category}) => {
    const { images,isLoading } =useFetchGift(Category);
  
  return (
    <>
        <h3>{ Category }</h3>
        {
          isLoading && (<h2>Cargando...</h2>)
        }
        <div className="card-grid">
          {images.map((image) => (
              <GiftItem 
                key={ image.id }
                { ...image }
              />
           )
          )}
        </div>
    </>
  )
}
