import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})

export class StackedListsService {

    stackedListsData = [
        {
            "id": "stacked",
            "title": "Single column",
            "code": ` 
            <div class="stacked-list">
            <ul role="list">
                <li>
                    <div>
                        <p class="content">Tristique Senectus</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p class="content">Tristique Senectus</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p class="content">Tristique Senectus</p>
                    </div>
                </li>
            </ul>
        </div>
            `
        },
        {
            "id": "stacked_2",
            "title": "Single column with description",
            "code": ` 
            <div class="stacked-list">
            <ul role="list">
                <li>
                    <div>
                        <p class="content">Tristique Senectus</p>
                        <p class="content-small">tristique@example.com</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p class="content">Tristique Senectus</p>
                        <p class="content-small">tristique@example.com</p>
                    </div>
                </li>
                <li>
                    <div>
                        <p class="content">Tristique Senectus</p>
                        <p class="content-small">tristique@example.com</p>
                    </div>
                </li>
            </ul>
        </div>
            `
        },
        {
            "id": "stacked_3",
            "title": "Two column",
            "code": ` 
            <div class="stacked-list-two-column">
            <ul role="list">
                <li>
                    <div class="flex items-center">
                        <div class="flex min-w-0 flex-1 items-center">
                            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div class="ml-3">
                                    <p class="content">Tristique Senectus</p>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-3">
                                        <p class="content">Turpis Egestas</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <div class="flex min-w-0 flex-1 items-center">
                            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div class="ml-3">
                                <p class="content">Tristique Senectus</p>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-3">
                                    <p class="content">Tristique Senectus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <div class="flex min-w-0 flex-1 items-center">
                            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div class="ml-3">
                                <p class="content">Tristique Senectus</p>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-3">
                                    <p class="content">Tristique Senectus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
            `
        },

        {
            "id": "stacked_4",
            "title": "Two column with description",
            "code": ` 
            <div class="stacked-list-two-column">
            <ul role="list">
                <li>
                    <div class="flex items-center">
                        <div class="flex min-w-0 flex-1 items-center">
                            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div class="ml-3">
                                <p class="content">Tristique Senectus</p>
                                <p class="content-small">tristique@example.com</p>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-3">
                                        <p class="content">Turpis Egestas</p>
                                        <p class="content-small">tristique@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <div class="flex min-w-0 flex-1 items-center">
                            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div class="ml-3">
                                <p class="content">Tristique Senectus</p>
                                <p class="content-small">tristique@example.com</p>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-3">
                                    <p class="content">Tristique Senectus</p>
                                    <p class="content-small">tristique@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
                <li>
                    <div class="flex items-center">
                        <div class="flex min-w-0 flex-1 items-center">
                            <div class="min-w-0 flex-1 md:grid md:grid-cols-2 md:gap-4">
                                <div class="ml-3">
                                    <p class="content">Tristique Senectus</p>
                                    <p class="content-small">tristique@example.com</p>
                                </div>
                                <div class="hidden md:block">
                                    <div class="ml-3">
                                        <p class="content">Turpis Egestas</p>
                                        <p class="content-small">tristique@example.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
            `
        },
    
    ];
}