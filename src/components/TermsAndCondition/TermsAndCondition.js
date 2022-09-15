import React from "react";
import styles from "./TermsAndCondition.module.css";

const TermsAndCondition = () => {
  return (
    <>
      <div id={styles.termsAndCondition} className="text-dark bg-white pt-2">
        <h3>Terms & Conditions</h3>
        <p>
          When it comes to what you should include in your terms and conditions
          or how you should be wording them, there are what could be considered
          standard clauses but, ultimately, you should always consider the
          particularities of your business and avoid using legalese. This
          template could help you get a head start, simply adapt it to your
          business, taking into consideration the services or products that you
          offer and the risks and liabilities that come with those.
        </p>

        <h4>Condition of use</h4>
        <p>
          When it comes to what you should include in your terms and conditions
          or how you should be wording them, there are what could be considered
          standard clauses but, ultimately, you should always consider the
          particularities of your business and avoid using legalese. This
          template could help you get a head start, simply adapt it to your
          business, taking into consideration the services or products that you
          offer and the risks and liabilities that come with those.
        </p>
        <h4>Privacy Policy</h4>
        <p>
          When it comes to what you should include in your terms and conditions
          or how you should be wording them, there are what could be considered
          standard clauses but, ultimately, you should always consider the
          particularities of your business and avoid using legalese. This
          template could help you get a head start, simply adapt it to your
          business, taking into consideration the services or products that you
          offer and the risks and liabilities that come with those.
        </p>
      </div>
      <div className="text-center pb-3">
        <button className="btn-blue px-4">Accept</button>
      </div>
    </>
  );
};

export default TermsAndCondition;
