import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Member {
  id?: number;
  name: string;
  email: string;
  roles?: any[];
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private baseUrl = '/api/members';

  constructor(private http: HttpClient) {}

  getAllMembers(): Observable<Member[]> {
    return this.http.get<Member[]>(this.baseUrl);
  }

  getMemberById(id: number): Observable<Member> {
    return this.http.get<Member>(`${this.baseUrl}/${id}`);
  }

  createMember(member: Member): Observable<Member> {
    return this.http.post<Member>(this.baseUrl, member);
  }

  updateMember(id: number, member: Member): Observable<Member> {
    return this.http.put<Member>(`${this.baseUrl}/${id}`, member);
  }

  deleteMember(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
