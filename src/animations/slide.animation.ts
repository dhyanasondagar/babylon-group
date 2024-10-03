import { animate, animation, group, query, style } from "@angular/animations";

export const slideAnimation = animation([
  group([
    query(':enter', style({ transform: 'translateX({{ enterStart }}) scale({{ hiddenScale }})' }), { optional: true }),
    query(':leave', [
      animate('750ms ease-in-out', style({ transform: 'translateX({{ leaveEnd }}) scale({{ hiddenScale }})' }))
    ], { optional: true }),
    query(':enter', [
      animate('750ms ease-in-out', style({ transform: 'translateX(0) scale(1)' }))
    ], { optional: true })
  ])
])