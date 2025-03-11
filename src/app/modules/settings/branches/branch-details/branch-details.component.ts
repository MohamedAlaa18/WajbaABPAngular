import { CommonModule } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // To get the branch id from the URL
import { SettingsSidebarComponent } from "../../settings-sidebar/settings-sidebar.component";
import { BranchService } from '@proxy/controllers';

@Component({
  selector: 'app-branch-details',
  standalone: true,
  imports: [CommonModule, SettingsSidebarComponent],
  templateUrl: './branch-details.component.html',
  styleUrls: ['./branch-details.component.scss']
})
export class BranchDetailsComponent implements OnInit {
  selectedBranch: any = {}; // Initialize as empty
  branchDetails: Array<any> = [];

  constructor(
    @Inject(BranchService) private branchService: BranchService,
    private activatedRoute: ActivatedRoute // To access the branch ID from the route
  ) { }

  ngOnInit(): void {
    const branchId = this.activatedRoute.snapshot.paramMap.get('id'); // Get the branch ID from the route
    if (branchId) {
      this.getBranchDetails(Number(branchId)); // Fetch branch details by ID
    }
  }

  getBranchDetails(branchId: number): void {
    this.branchService.getById(branchId).subscribe({
      next: (response) => {
        // Update selectedBranch with the fetched data
        this.selectedBranch = response.data;

        // Map the fetched data to the branchDetails array
        this.branchDetails = [
          { label: 'Name', key: 'name', value: this.selectedBranch.name },
          { label: 'Latitude', key: 'latitude', value: this.selectedBranch.latitude },
          { label: 'Longitude', key: 'longitude', value: this.selectedBranch.longitude },
          { label: 'Email', key: 'email', value: this.selectedBranch.email },
          { label: 'Phone', key: 'phone', value: this.selectedBranch.phone },
          { label: 'City', key: 'city', value: this.selectedBranch.city },
          { label: 'State', key: 'state', value: this.selectedBranch.state },
          { label: 'Zip Code', key: 'zipCode', value: this.selectedBranch.zipCode },
          { label: 'Address', key: 'address', value: this.selectedBranch.address },
          {
            label: 'Status',
            key: 'status',
            value: this.selectedBranch.status === 1 ? 'Active' : 'Non-Active'
          }
        ];
      },
      error: (err) => {
        console.error('Error fetching branch details:', err);
        // You can handle the error by showing a message or fallback logic here
      }
    });
  }

  getTextClass(key: string): string {
    if (key === 'status') {
      return this.selectedBranch.status === 1 ? 'badge bg-success rounded-0' : 'badge bg-danger rounded-0';
    }
    return 'opacity-75';
  }
}
