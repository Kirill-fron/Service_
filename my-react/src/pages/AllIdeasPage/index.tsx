export const AllIdeasPage = () => {
  const ideas = [
    {
      nick: 'nick1',
      name: 'idea1',
      dec: 'dec1',
    },
    {
      nick: 'nick2',
      name: 'idea2',
      dec: 'dec2',
    },
    {
      nick: 'nick3',
      name: 'idea3',
      dec: 'dec3',
    },
    {
      nick: 'nick4',
      name: 'idea4',
      dec: 'dec4',
    },
  ]

  return (
    <>
      <h1>123</h1>
      {ideas.map((idea) => (
        <div key={idea.nick}>
          <h2>{idea.nick}</h2>
          <h3>{idea.name}</h3>
          <p>{idea.dec}</p>
        </div>
      ))}
    </>
  )
}
