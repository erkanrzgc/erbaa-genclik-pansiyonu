/**
 * StarBorder — React Bits (https://reactbits.dev/animations/star-border)
 * Kenarda dönen yumuşak parıltı. Saf CSS keyframe → reduced-motion ile durur.
 * Inline style YOK (sıkı CSP uyumlu) — shimmer rengi/hızı StarBorder.css'te.
 * Statik render edilir (client directive yok) → sıfır JS.
 */
import './StarBorder.css';

const StarBorder = ({ as: Component = 'button', className = '', children, ...rest }) => {
  return (
    <Component className={`star-border-container ${className}`} {...rest}>
      <div className="border-gradient-bottom" aria-hidden="true"></div>
      <div className="border-gradient-top" aria-hidden="true"></div>
      <div className="inner-content">{children}</div>
    </Component>
  );
};

export default StarBorder;
