module.exports = (sql, type) => {
  return sql.define('quotes', {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true
      },
    author: {
      type: type.STRING,
      allowNull: false
    },
    quote: {
      type: type.STRING,
      allowNull: false
    }
  });
}

