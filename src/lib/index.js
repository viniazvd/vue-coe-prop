export default {
  beforeCreate () {
    const { props } = this.$options
    if (!props) return

    this._$coeprops = Object
      .entries(props)
      .reduce((acc, [ key, value ]) => {
        const bounded = Object.entries(value).reduce((newProps, [ type, fn ]) => {
          console.log(props, type, fn)
          newProps[key] = {
            ...newProps[key],
            // [type]: typeof fn === 'function' ? props[key][type].bind(this, type === 'validator' && this.$props[key]) : { ...props[key][type] }
            [type]: typeof fn === 'function' ? props[key][type].bind(this, ...arguments) : { ...props[key][type] }
          }

          return newProps
        }, {})

        acc = { ...acc, ...bounded }

        return acc
      }, {})
  }
}
