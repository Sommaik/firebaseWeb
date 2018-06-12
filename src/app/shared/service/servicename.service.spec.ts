import { TestBed, inject } from '@angular/core/testing';

import { ServicenameService } from './servicename.service';
import { HttpModule, XHRBackend, ResponseOptions, Response } from '@angular/http';
import { MockBackend } from '@angular/http/testing';

describe('ServicenameService', () => {
  beforeEach(() => {
    // let httpSpy = jasmine.createSpyObj('Http', ['get', 'post']);
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [
        ServicenameService,
        MockBackend
      ]
    });
  });

  it('should be created', inject([ServicenameService], (service: ServicenameService) => {
    expect(service).toBeTruthy();
  }));

  it('should be case 1', inject([ServicenameService, MockBackend], (service: ServicenameService, mockBackend: MockBackend) => {
    const mockResponse =
      [
        { id: 0, name: 'Video 0' },
        { id: 1, name: 'Video 1' },
        { id: 2, name: 'Video 2' },
        { id: 3, name: 'Video 3' },
      ];

    mockBackend.connections.subscribe((connection) => {
      connection.mockRespond(new Response(new ResponseOptions({
        body: JSON.stringify(mockResponse)
      })));
    });

    service.loadProject().subscribe((resp) => {
      expect(resp.length).toBe(4, "size of data")
    });
  }));
});
