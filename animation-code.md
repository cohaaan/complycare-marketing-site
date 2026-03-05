# Flow Animation Reference

This file documents the SVG flow animation used in the hero section.

## Component Location

`src/marketing/components/home/FlowAnimation.tsx`

## Key Implementation Details

- **offset-path**: CSS property that positions elements along an SVG path
- **flowDot animation**: Animates `offset-distance` from 0% to 100% for flowing dots
- **Flow paths**: Curved SVG paths with white stroke (semi-transparent)
- **Animated dots**: 5 circles that travel along the paths at different speeds/delays

## Logo Badges (Hero Section)

The hero includes trust badges for:
- HIPAA Compliant
- PCC Integrated

To use image assets instead of text, add to `public/`:
- `hipaa-compliant-logo.svg`
- `pcc-logo.jpeg` (for PointClickCare Marketplace)

Then replace the badge divs with:

```jsx
<a
  href="https://marketplace.pointclickcare.com/..."
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-white px-4 py-2 shadow-sm hover:shadow-md hover:scale-105 transition-all duration-300 flex items-center justify-center"
>
  <img src="/pcc-logo.jpeg" alt="PointClickCare Marketplace Partner" className="h-6 w-auto" />
</a>
<img src="/hipaa-compliant-logo.svg" alt="HIPAA Compliant" className="h-10 w-auto" />
```

## Browser Support

`offset-path` is supported in modern browsers (Chrome 79+, Firefox 72+, Safari 15.4+). For older browsers, the flow paths will still render; only the animated dots may not move.
