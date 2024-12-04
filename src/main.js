
import "./flickity.pkgd.min.js"
import { animate } from "https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm"

// animate('.hero__video', {y: [300,0]},
//     {duration: 1, ease: [0.39, 0.24, 0.3, 1]}
// )
animate('.hero__video', {opacity: [0, 1]},
    {duration: 1, ease: [0.39, 0.24, 0.3, 1]}
)

animate('.btn--bordered', {x: [200, 0]},
    {duration: 1.5, ease: [.8,.5,.3,1]}
)

