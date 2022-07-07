import { atom, selector } from 'recoil'

export const countAtom = atom({
  key: 'count',
  default: 1,
})

export const countSquareAtom = selector({
  key: 'countSquare',
  get: ({get}) => {
    const count = get(countAtom)
    return count*count
  }
})


