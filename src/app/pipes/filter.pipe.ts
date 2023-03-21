import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    console.log(items, 'Search pipe');

    if (!items) return [];
    if (!searchText) return items;

    searchText = searchText.toLowerCase();

    return items.filter((it) => {
      console.log(it.title, 'after sea');
      return it.title.toLowerCase().includes(searchText);
    });
  }
}
