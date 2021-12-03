import Card from '@mui/material/Card';
export default function Cardperso() {
  return (
    <Card className='flex cardperso'>
      <img
        src='/zadzad'
        className='avatar'
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = '/avatar.png';
        }}
      />
      .<div>ahmed hedi</div>
    </Card>
  );
}
