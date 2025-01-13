import { useParams } from "react-router-dom";

export const ViewIdeaPage = () => {
  const {ideaNick} = useParams() as {ideaNick: string};
  return (
    <div>
      <h1>{ideaNick} </h1>
      <p>Idea 1 of idea 1 </p>
      <div>
        <p>Text paragrph 1 if idea 1</p>
        <p>Text paragrph 2 if idea 2</p>
        <p>Text paragrph 3 if idea 3</p>
      </div>
    </div>
  )
}
