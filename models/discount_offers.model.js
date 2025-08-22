module.exports = (sequelize, DataTypes) => {
  const DiscountOffers = sequelize.define("DiscountOffers", {
    offer_id: { 
      type: DataTypes.INTEGER, 
      autoIncrement: true, 
      primaryKey: true 
    },
    fare_id: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    offer_code: { 
      type: DataTypes.STRING(255),  // 1234 is too large for codes, better keep small
      allowNull: false 
    },
    description: { 
      type: DataTypes.STRING(1000), // was wrongly set to DATE
      allowNull: false 
    },
    discount_type: { 
      type: DataTypes.ENUM("Flat", "Percentage"), 
      allowNull: false 
    },
    discount_value: { 
      type: DataTypes.FLOAT, 
      allowNull: false 
    },
    max_discount: { 
      type: DataTypes.FLOAT,  // you wrote Float (wrong case)
      allowNull: true 
    },
    valid_from: { 
      type: DataTypes.DATE, 
      allowNull: false 
    },
    valid_to: { 
      type: DataTypes.DATE, 
      allowNull: false 
    },
    usage_limit: { 
      type: DataTypes.INTEGER, 
      allowNull: true 
    },
    is_active: { 
      type: DataTypes.BOOLEAN,   // better than INTEGER(0/1)
      defaultValue: true 
    }
  }, {
    tableName: "discount_offers",
    timestamps: true,  // createdAt / updatedAt
  });

  return DiscountOffers;
};
