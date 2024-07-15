import connection from "../../config/db";
import { Member } from "../../models/member.model";

const updateMemberService = async (member:Member,memberId:number): Promise<void> => {
    const { name, last_name, second_last_name } = member;
    await (await connection).execute('UPDATE members SET name = ?, last_name = ?, second_last_name = ? WHERE id = ?', [name, last_name, second_last_name, memberId])
}

export default updateMemberService;