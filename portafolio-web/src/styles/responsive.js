const sizes = {
  mobile1: "320px",
  mobile2: "480px",
  mobile3: "481px",
  mobile4: "767px",
  tablet1: "768px",
  tablet2: "1024px",
  laptop1: "1025px",
  laptop2: "1199px",
  laptop3: "1200px",
  laptop4: "1440px",
};

export const devices = {
  mobile1: `(min-width: ${sizes.mobile1}) and (max-width: ${sizes.mobile2})`,
  mobile2: `(min-width: ${sizes.mobile3}) and (max-width: ${sizes.mobile4})`,
  tablet1: `(min-width: ${sizes.tablet1}) and (max-width: ${sizes.tablet2})`,
  laptop1: `(min-width: ${sizes.laptop1}) and (max-width: ${sizes.laptop2})`,
  laptop2: `(min-width: ${sizes.laptop3}) and (max-width: ${sizes.laptop4})`,
};
