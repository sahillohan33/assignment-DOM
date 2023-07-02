const calculateDiscountPercentage = () => {
    const originalPrice = parseFloat(document.getElementById("originalPrice").value);
    const discountedPrice = parseFloat(document.getElementById("discountedPrice").value);

    const discountPercentage = ((originalPrice - discountedPrice) / originalPrice) * 100;

    document.getElementById("result").textContent = `You save ${discountPercentage.toFixed(2)}%`;
  };