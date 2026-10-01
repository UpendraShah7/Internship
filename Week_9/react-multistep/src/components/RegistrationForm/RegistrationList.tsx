import type { Registration } from './api/registrationApi';

interface RegistrationListProps {
  registrations: Registration[];
  onEdit: (registration: Registration) => void;
  onDelete: (id: string) => void;
}

const RegistrationList = ({
  registrations,
  onEdit,
  onDelete,
}: RegistrationListProps) => {
  if (registrations.length === 0) {
    return <p className="list-empty">No registrations yet.</p>;
  }

  return (
    <div className="registration-table-scroll">
      <table className="registration-table">
        <thead>
          <tr>
            <th>Full Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>City</th>
            <th>Payment</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {registrations.map((item) => (
            <tr key={item.id}>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.address}</td>
              <td>{item.city}</td>
              <td>{item.paymentMethod}</td>
              <td>
                <div className="table-actions">
                  <button
                    className="table-action table-action-edit"
                    type="button"
                    onClick={() => onEdit(item)}
                  >
                    Edit
                  </button>
                  <button
                    className="table-action table-action-delete"
                    type="button"
                    onClick={() => onDelete(item.id)}
                  >
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RegistrationList;
