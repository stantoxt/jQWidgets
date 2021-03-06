/*
jQWidgets v5.1.0 (2017-Aug)
Copyright (c) 2011-2017 jQWidgets.
License: http://jqwidgets.com/license/
*/
/// <reference path="jqwidgets.d.ts" />
import { Component, Input, Output, EventEmitter, ElementRef, forwardRef, OnChanges, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
declare let JQXLite: any;

@Component({
    selector: 'jqxSortable',
    template: '<div><ng-content></ng-content></div>'
})

export class jqxSortableComponent implements OnChanges
{
   @Input('appendTo') attrAppendTo: any;
   @Input('axis') attrAxis: any;
   @Input('cancelProperty') attrCancelProperty: any;
   @Input('connectWith') attrConnectWith: any;
   @Input('containment') attrContainment: any;
   @Input('cursor') attrCursor: any;
   @Input('cursorAt') attrCursorAt: any;
   @Input('delay') attrDelay: any;
   @Input('disabled') attrDisabled: any;
   @Input('distance') attrDistance: any;
   @Input('dropOnEmpty') attrDropOnEmpty: any;
   @Input('forceHelperSize') attrForceHelperSize: any;
   @Input('forcePlaceholderSize') attrForcePlaceholderSize: any;
   @Input('grid') attrGrid: any;
   @Input('handle') attrHandle: any;
   @Input('helper') attrHelper: any;
   @Input('items') attrItems: any;
   @Input('opacity') attrOpacity: any;
   @Input('placeholderShow') attrPlaceholderShow: any;
   @Input('revert') attrRevert: any;
   @Input('scroll') attrScroll: any;
   @Input('scrollSensitivity') attrScrollSensitivity: any;
   @Input('scrollSpeed') attrScrollSpeed: any;
   @Input('tolerance') attrTolerance: any;
   @Input('zIndex') attrZIndex: any;
   @Input('width') attrWidth: any;
   @Input('height') attrHeight: any;

   @Input('auto-create') autoCreate: boolean = true;

   properties: string[] = ['appendTo','axis','cancelProperty','connectWith','containment','cursor','cursorAt','delay','disabled','distance','dropOnEmpty','forceHelperSize','forcePlaceholderSize','grid','handle','helper','items','opacity','placeholderShow','revert','scroll','scrollSensitivity','scrollSpeed','tolerance','zIndex'];
   host: any;
   elementRef: ElementRef;
   widgetObject:  jqwidgets.jqxSortable;

   constructor(containerElement: ElementRef) {
      this.elementRef = containerElement;
   }

   ngOnInit() {
      if (this.autoCreate) {
         this.createComponent(); 
      }
   }; 

   ngOnChanges(changes: SimpleChanges) {
      if (this.host) {
         for (let i = 0; i < this.properties.length; i++) {
            let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            let areEqual: boolean;

            if (this[attrName] !== undefined) {
               if (typeof this[attrName] === 'object') {
                  if (this[attrName] instanceof Array) {
                     areEqual = this.arraysEqual(this[attrName], this.host.jqxSortable(this.properties[i]));
                  }
                  if (areEqual) {
                     return false;
                  }

                  this.host.jqxSortable(this.properties[i], this[attrName]);
                  continue;
               }

               if (this[attrName] !== this.host.jqxSortable(this.properties[i])) {
                  this.host.jqxSortable(this.properties[i], this[attrName]); 
               }
            }
         }
      }
   }

   arraysEqual(attrValue: any, hostValue: any): boolean {
      if (attrValue.length != hostValue.length) {
         return false;
      }
      for (let i = 0; i < attrValue.length; i++) {
         if (attrValue[i] !== hostValue[i]) {
            return false;
         }
      }
      return true;
   }

   manageAttributes(): any {
      let options = {};
      for (let i = 0; i < this.properties.length; i++) {
         let attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
         if (this[attrName] !== undefined) {
            options[this.properties[i]] = this[attrName];
         }
      }
      return options;
   }

   moveClasses(parentEl: HTMLElement, childEl: HTMLElement): void {
      let classes: any = parentEl.classList;
      childEl.classList.add(...classes);
      parentEl.className = '';
   }

   moveStyles(parentEl: HTMLElement, childEl: HTMLElement): void {
      let style = parentEl.style.cssText;
      childEl.style.cssText = style
      parentEl.style.cssText = '';
   }

   createComponent(options?: any): void {
      if (options) {
         JQXLite.extend(options, this.manageAttributes());
      }
      else {
        options = this.manageAttributes();
      }
      this.host = JQXLite(this.elementRef.nativeElement.firstChild);

      this.moveClasses(this.elementRef.nativeElement, this.host[0]);
      this.moveStyles(this.elementRef.nativeElement, this.host[0]);

      this.__wireEvents__();
      this.widgetObject = jqwidgets.createInstance(this.host, 'jqxSortable', options);

      this.__updateRect__();
   }

   createWidget(options?: any): void {
        this.createComponent(options);
   }

   __updateRect__() : void {
      this.host.css({ width: this.attrWidth, height: this.attrHeight });
   }

   setOptions(options: any) : void {
      this.host.jqxSortable('setOptions', options);
   }

   // jqxSortableComponent properties
   appendTo(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('appendTo', arg);
      } else {
          return this.host.jqxSortable('appendTo');
      }
   }

   axis(arg?: String | Number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('axis', arg);
      } else {
          return this.host.jqxSortable('axis');
      }
   }

   cancelProperty(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('cancelProperty', arg);
      } else {
          return this.host.jqxSortable('cancelProperty');
      }
   }

   connectWith(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('connectWith', arg);
      } else {
          return this.host.jqxSortable('connectWith');
      }
   }

   containment(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('containment', arg);
      } else {
          return this.host.jqxSortable('containment');
      }
   }

   cursor(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('cursor', arg);
      } else {
          return this.host.jqxSortable('cursor');
      }
   }

   cursorAt(arg?: jqwidgets.SortableCursorAt) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('cursorAt', arg);
      } else {
          return this.host.jqxSortable('cursorAt');
      }
   }

   delay(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('delay', arg);
      } else {
          return this.host.jqxSortable('delay');
      }
   }

   disabled(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('disabled', arg);
      } else {
          return this.host.jqxSortable('disabled');
      }
   }

   distance(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('distance', arg);
      } else {
          return this.host.jqxSortable('distance');
      }
   }

   dropOnEmpty(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('dropOnEmpty', arg);
      } else {
          return this.host.jqxSortable('dropOnEmpty');
      }
   }

   forceHelperSize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('forceHelperSize', arg);
      } else {
          return this.host.jqxSortable('forceHelperSize');
      }
   }

   forcePlaceholderSize(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('forcePlaceholderSize', arg);
      } else {
          return this.host.jqxSortable('forcePlaceholderSize');
      }
   }

   grid(arg?: Array<Number>) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('grid', arg);
      } else {
          return this.host.jqxSortable('grid');
      }
   }

   handle(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('handle', arg);
      } else {
          return this.host.jqxSortable('handle');
      }
   }

   helper(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('helper', arg);
      } else {
          return this.host.jqxSortable('helper');
      }
   }

   items(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('items', arg);
      } else {
          return this.host.jqxSortable('items');
      }
   }

   opacity(arg?: Number | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('opacity', arg);
      } else {
          return this.host.jqxSortable('opacity');
      }
   }

   placeholderShow(arg?: String | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('placeholderShow', arg);
      } else {
          return this.host.jqxSortable('placeholderShow');
      }
   }

   revert(arg?: Number | Boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('revert', arg);
      } else {
          return this.host.jqxSortable('revert');
      }
   }

   scroll(arg?: boolean) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('scroll', arg);
      } else {
          return this.host.jqxSortable('scroll');
      }
   }

   scrollSensitivity(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('scrollSensitivity', arg);
      } else {
          return this.host.jqxSortable('scrollSensitivity');
      }
   }

   scrollSpeed(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('scrollSpeed', arg);
      } else {
          return this.host.jqxSortable('scrollSpeed');
      }
   }

   tolerance(arg?: string) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('tolerance', arg);
      } else {
          return this.host.jqxSortable('tolerance');
      }
   }

   zIndex(arg?: number) : any {
      if (arg !== undefined) {
          this.host.jqxSortable('zIndex', arg);
      } else {
          return this.host.jqxSortable('zIndex');
      }
   }


   // jqxSortableComponent functions
   cancelMethod(): void {
      this.host.jqxSortable('cancelMethod');
   }

   destroy(): void {
      this.host.jqxSortable('destroy');
   }

   disable(): void {
      this.host.jqxSortable('disable');
   }

   enable(): void {
      this.host.jqxSortable('enable');
   }

   refresh(): void {
      this.host.jqxSortable('refresh');
   }

   refreshPositions(): void {
      this.host.jqxSortable('refreshPositions');
   }

   serialize(): void {
      this.host.jqxSortable('serialize');
   }

   toArray(): Array<any> {
      return this.host.jqxSortable('toArray');
   }


   // jqxSortableComponent events
   @Output() onActivate = new EventEmitter();
   @Output() onBeforeStop = new EventEmitter();
   @Output() onChange = new EventEmitter();
   @Output() onCreate = new EventEmitter();
   @Output() onDeactivate = new EventEmitter();
   @Output() onOut = new EventEmitter();
   @Output() onOver = new EventEmitter();
   @Output() onReceive = new EventEmitter();
   @Output() onRemove = new EventEmitter();
   @Output() onSort = new EventEmitter();
   @Output() onStart = new EventEmitter();
   @Output() onStop = new EventEmitter();
   @Output() onUpdate = new EventEmitter();

   __wireEvents__(): void {
      this.host.on('activate', (eventData: any) => { this.onActivate.emit(eventData); });
      this.host.on('beforeStop', (eventData: any) => { this.onBeforeStop.emit(eventData); });
      this.host.on('change', (eventData: any) => { this.onChange.emit(eventData); });
      this.host.on('create', (eventData: any) => { this.onCreate.emit(eventData); });
      this.host.on('deactivate', (eventData: any) => { this.onDeactivate.emit(eventData); });
      this.host.on('out', (eventData: any) => { this.onOut.emit(eventData); });
      this.host.on('over', (eventData: any) => { this.onOver.emit(eventData); });
      this.host.on('receive', (eventData: any) => { this.onReceive.emit(eventData); });
      this.host.on('remove', (eventData: any) => { this.onRemove.emit(eventData); });
      this.host.on('sort', (eventData: any) => { this.onSort.emit(eventData); });
      this.host.on('start', (eventData: any) => { this.onStart.emit(eventData); });
      this.host.on('stop', (eventData: any) => { this.onStop.emit(eventData); });
      this.host.on('update', (eventData: any) => { this.onUpdate.emit(eventData); });
   }

} //jqxSortableComponent


