

// const cart = require("./CartSchema");

// const UpdateCount =async(req,res)=>{
//     const itemId = req.params.itemId;
//     const action = req.body.action; 
  
//     try {
//       const cartItem = await cart.findById(itemId);
  
//       if (action === 'decrease') {
//         cartItem.Quantity = Math.max(1, cartItem.Quantity - 1);
//       } else if (action === 'increase') {
//         cartItem.Quantity = cartItem.Quantity + 1;
//       }
//       await cartItem.save();
  
//       res.status(200).json(cartItem);
//     } catch (error) {
//       res.status(500).json({ error: 'Error updating quantity' });
//     }
//   }

// module.exports =UpdateCount

const cart = require("./CartSchema");

const UpdateCount = async (req, res) => {
  const itemId = req.params.itemId;
  const action = req.body.action;

  try {
    const cartItem = await cart.findById(itemId);

    if (!cartItem) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    if (action === "decrease") {
      cartItem.Quantity = Math.max(1, cartItem.Quantity - 1);
    } else if (action === "increase") {
      cartItem.Quantity = cartItem.Quantity + 1;
    }

    // Update Price and Total based on new Quantity
    cartItem.Total = cartItem.Price * cartItem.Quantity;

    await cartItem.save();

    res.status(200).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: "Error updating quantity" });
  }
};

module.exports = UpdateCount;


