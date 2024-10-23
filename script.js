///////
///////
///////

document
  .getElementById("palCalForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const income = parseFloat(document.getElementById("income").value);
    const savings = parseFloat(document.getElementById("savings").value);
    const year = parseInt(document.getElementById("year").value);

    let responseText = "";
    let nextPage = "";

    if (income <= 300000) {
      responseText =
        "It's essential to focus on building your savings and laying a strong financial foundation, especially in the early stages of your career or student life. Aim to save at least 10-20% of your income each month, depending on your expenses and financial goals. Consider setting up an emergency fund with enough to cover three to six months' worth of living expenses. Keep a close eye on your expenses and prioritize essential needs over wants. Remember, even small amounts saved consistently can add up over time. Explore our investment schemes page for options tailored to your budget and financial aspirations.";
      nextPage = "savings.html";
    } else if (income <= 400000) {
      responseText =
        "Consider allocating a portion of your income towards both short-term and long-term savings goals. Aim to save at least 20-30% of your income each month, with a focus on building an emergency fund equivalent to six months worth of living expenses. When it comes to investments, diversification is key to managing risk and maximizing returns. Depending on your risk tolerance and investment horizon, you may consider the following options:1. If you have a higher risk tolerance and a longer investment horizon, investing in individual stocks can offer the potential for high returns and mutual finds for a diversification in asset classes. 2. If you have a lower risk tolerance, consider investing in government bonds and gold securities that are safe assets which relatively grow over time and prove a stable source of income.";
      nextPage = "investments.html";
    } else if (income <= 500000) {
      responseText =
        "Consider allocating a portion of your income towards both short-term and long-term savings goals. Aim to save at least 20-30% of your income each month, with a focus on building an emergency fund equivalent to six months worth of living expenses. When it comes to investments, diversification is key to managing risk and maximizing returns. Depending on your risk tolerance and investment horizon, you may consider the following options:1. If you have a higher risk tolerance and a longer investment horizon, investing in individual stocks can offer the potential for high returns and mutual finds for a diversification in asset classes. 2. If you have a lower risk tolerance, consider investing in government bonds and gold securities that are safe assets which relatively grow over time and prove a stable source of income.";
      nextPage = "investments.html";
    } else if (income <= 600000) {
      responseText =
        "With your income, its crucial to focus on optimizing your financial strategy to achieve long-term financial stability and growth. If you are already making investments, take risks and invest in choices that may give you a higher return. Aim to save at least 30-40% of your income each month, considering your expenses, financial goals, and investment priorities. Continue building your emergency fund to cover six to twelve months' worth of living expenses. Consider parking a portion of your emergency fund in liquid assets such as high-yield savings accounts or short-term deposits for easy access in case of emergencies. Consider setting up separate savings accounts or investment accounts for specific financial goals such as education, homeownership, or travel. This will help you track progress towards each goal and stay motivated to save and invest consistently.";
      nextPage = "investments.html";
    } else if (income <= 700000) {
      responseText =
        "With your higher earnings, it's important to focus on optimizing your financial strategy to achieve your long-term financial goals. Allocate a significant portion of your income towards equity investments for potential long-term growth. Invest in a mix of individual stocks, mutual funds, and exchange-traded funds (ETFs) across different sectors and geographies to spread risk and capture market opportunities. Explore tax-efficient savings and investment strategies to minimize tax liabilities and maximize after-tax returns. Consider leveraging tax-saving investment options such as ELSS mutual funds, tax-exempt bonds, or structured products with tax benefits.";
      nextPage = "investments.html";
    } else if (income <= 800000) {
      responseText =
        "As you continue to advance in your career and experience income growth, it's crucial to leverage your financial resources effectively to secure your financial future. Consider investing in your education, skills, and personal development to enhance your earning potential and career prospects. Allocate a portion of your income towards attending workshops, courses, or certifications that can expand your knowledge and expertise in your field or explore new career opportunities. Consider diversifying your investment portfolio beyond traditional asset classes to capture unique opportunities and enhance returns. Conduct thorough research and due diligence before investing in alternative assets to understand the market dynamics, risks, and potential returns.";
      nextPage = "investments.html";
    } else if (income <= 900000) {
      responseText =
        "With your substantial income level, it's important to adopt a comprehensive financial strategy that maximizes your wealth-building potential while also ensuring long-term financial security. Allocate a significant portion of your income towards equity investments for potential long-term growth. Invest in a mix of individual stocks, mutual funds, and exchange-traded funds (ETFs) across different sectors and geographies to capture market opportunities and enhance portfolio performance.";
      nextPage = "investments.html";
    } else if (income <= 1000000) {
      responseText =
        "As you reach higher income levels, it's essential to focus on advanced wealth-building strategies that align with your financial goals and aspirations.Take advantage of specialized services such as tax planning, estate planning, philanthropic advisory, and legacy planning to optimize your financial affairs and achieve your long-term wealth goals. But also focus on building funds to meet unexpected situation. Target saving 30% of your income.";
      nextPage = "investments.html";
    } else {
      responseText =
        "As you enter the real of high-income earners, it's important to adopt a balanced approach to investment and savings that aligns with your financial goals and risk tolerance. Adopt a long-term investment perspective and resist the temptation to chase short-term gains or speculative opportunities. Focus on building wealth over time through disciplined saving, prudent investing, and consistent wealth management practices. Prioritize conservative risk management stratagies to protect your wealth and preserce capital. Avoid taking excessing risks that could jeopardize your financial security, especially as your income levels increases. Docus on preserving capital while seeking consistent, sustainable returns over the long term. Continue to prioritize savings for key financial goals such as retirement, education, homeownership, and wealth preservation. Set aside a portion of your income for regular savings and investment contributions to achieve your finacial objectives";
      nextPage = "investments.html";
    }

    // Create a new page with the response and button
    document.body.innerHTML = `
      <div class="container">
          <h1>PAL CAL - Feedback</h1>
          <p>${responseText}</p>
          <button onclick="location.href='${nextPage}'">Next Step</button>
      </div>
  `;
  });
