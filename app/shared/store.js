import { observable } from 'mobx'

const store = observable({
  count: 1
})

store.increment = () => {
  store.count += 1
}

export default store
