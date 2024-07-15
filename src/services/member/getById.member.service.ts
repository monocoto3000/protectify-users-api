import connection from "../../config/db";
import { Member } from "../../models/member.model";
const getByIdMemberService = async (memberId: number): Promise<Member | null> => {
    const [rows] = await (await connection).execute('SELECT id,name,last_name,second_last_name,created_by,created_at FROM members WHERE id = ?', [memberId]);
    const members = rows as Member[];
    return members.length > 0 ? members[0] : null;
}
export default getByIdMemberService