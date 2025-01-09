import { initTRPC } from '@trpc/server'

const ideas = [
  {
    nick: 'nick1',
    name: 'idea1',
  },
  {
    nick: 'nick2',
    name: 'idea2',
  },
  {
    nick: 'nick3',
    name: 'idea3',
  },
  {
    nick: 'nick4',
    name: 'idea4',
  },
  {
    nick: 'nick5',
    name: 'idea5',
  },
]

const trpc = initTRPC.create()

export const trpcRouter = trpc.router({
  getIdeas: trpc.procedure.query(() => {
    return { ideas }
  }),
})
